import { useDispatch, useSelector } from 'react-redux';
import { findAll, findById } from '../api/productApi';
import { setError, setLoading, setVo, setVoList } from '../store/productSlice';

export default function useProduct() {
  const dispatch = useDispatch();
  const { error, loading, voList, vo } = useSelector((state) => state.product);

  async function fetchProductVoList() {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const resp = await findAll();
      dispatch(setVoList(resp.data));
    } catch (e) {
      dispatch(setError(e));
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function fetchProductVoById(id) {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const resp = await findById(id);
      dispatch(setVo(resp.data));
    } catch (e) {
      dispatch(setError(e));
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    vo,
    voList,
    fetchProductVoList,
    fetchProductVoById,
    loading,
    error,
  };
}
