import _ from 'lodash';

import Accidentes from '../../../Assets/accidentes.json';
import Barrios from '../../../Assets/barrios.json';

const grouped = _.groupBy(Accidentes, item => item.code);

const updatePercentiles = (featureCollection) => {
  const { features = [] } = featureCollection;

  return features.map((f) => {
    return {
      name: f.properties.NOMBRE,
      type: "Feature",
      code: f.properties.CODIGO,
      properties: {
        name: f.properties.NOMBRE,
      },
      geometry: f.geometry,
    };
  });
}

const getBarrios = (query = {}) => {
  const data = updatePercentiles(Barrios);

  if (_.isEmpty(query)) {
    // return data.map(item => {
    //   const { properties } = item;

    //   const accd = grouped[Number(item.code) || item.code];
    //   const cantidad = accd?.length || 0;

    //   return {
    //     ...item,
    //     properties: {
    //       ...properties,
    //       percentile: cantidad,
    //       value: cantidad,
    //     }
    //   };
    // });

    return [];
  }

  const { year, clase } = query;

  return data.map(item => {
    const { properties } = item;

    const accd = (grouped[Number(item.code) || item.code] || [])
      .filter(acc => acc.clase === _.lowerCase(clase?.value) && acc.year === year?.value);
    const cantidad = accd.length || 0;

    return {
      ...item,
      properties: {
        ...properties,
        percentile: cantidad,
        value: cantidad,
      }
    };
  });
}

export default getBarrios;