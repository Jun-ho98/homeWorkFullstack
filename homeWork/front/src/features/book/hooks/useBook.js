import { useDispatch, useSelector } from 'react-redux';
import { findAll, findById } from '../api/bookApi';
import { setError, setLoaidng, setVo, setVoList } from '../store/bookSlice';

export default function useBook() {
  const dispatch = useDispatch();
  const { error, loading, voList, vo } = useSelector((state) => state.book);

  async function fetchBookVoList() {
    try {
      dispatch(setLoaidng(true));
      dispatch(setError(null));
      const resp = await findAll();
      dispatch(setVoList(resp.data));
    } catch (e) {
      dispatch(setError(e));
    } finally {
      dispatch(setLoaidng(false));
    }
  }

  async function fetchBookVoById(id) {
    try {
      dispatch(setLoaidng(true));
      dispatch(setError(null));
      const resp = await findById(id);
      dispatch(setVo(resp.data));
    } catch (e) {
      dispatch(setError(e));
    } finally {
      dispatch(setLoaidng(false));
    }
  }
  return {
    vo,
    voList,
    fetchBookVoList,
    loading,
    error,
    fetchBookVoById,
  };
}
