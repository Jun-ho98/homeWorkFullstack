import api from '../../../app/api/axios';

export async function save(vo) {
  return await api.post(`product`, vo);
}
export async function findAll() {
  return await api.get(`product`);
}
export async function findById(id) {
  return await api.get(`product/${id}`);
}
export async function deleteById(id) {
  return await api.delete(`product/${id}`);
}
export async function updateNameAndPriceById(vo) {
  return await api.put(`product/${vo.id}`, vo);
}
