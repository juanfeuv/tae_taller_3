import Accidentes from '../../../Assets/tipos_accidente.json';

const getAccidentes = () => Accidentes.map(item => ({ value: item, label: item }));

export default getAccidentes;