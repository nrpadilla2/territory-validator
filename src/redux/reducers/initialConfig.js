const NAME = 'Name';
const HOMESTEAD = 'Is Homestead';
const STREET_ADDRESS = 'Street Address';
const POSTAL_CODE = 'Postal Code';
const GEO_LOCATION = 'Geo Location';

export default {
  services: [
    {
      id: 1,
      name: 'Hillsborough County Property Appraiser',
      url: 'https://gis.hcpafl.org/propertysearch',
      parsedData: [NAME, HOMESTEAD, STREET_ADDRESS, POSTAL_CODE],
      requiresApiKey: false,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 2,
      name: 'Melissa.com',
      url: 'https://melissa.com',
      parsedData: [NAME, STREET_ADDRESS, POSTAL_CODE, GEO_LOCATION],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 3,
      name: 'a-third-tech.com',
      url: '#',
      parsedData: [NAME, STREET_ADDRESS, POSTAL_CODE, GEO_LOCATION],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 4,
      name: 'Hillsborough County Property Appraiser',
      url: 'https://gis.hcpafl.org/propertysearch',
      parsedData: [NAME, HOMESTEAD, STREET_ADDRESS, POSTAL_CODE],
      requiresApiKey: false,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 5,
      name: 'Melissa.com',
      url: 'https://melissa.com',
      parsedData: [NAME, STREET_ADDRESS, POSTAL_CODE, GEO_LOCATION],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 6,
      name: 'a-third-tech.com',
      url: '#',
      parsedData: [NAME, STREET_ADDRESS, POSTAL_CODE, GEO_LOCATION],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 7,
      name: 'Hillsborough County Property Appraiser',
      url: 'https://gis.hcpafl.org/propertysearch',
      parsedData: [NAME, HOMESTEAD, STREET_ADDRESS, POSTAL_CODE],
      requiresApiKey: false,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 8,
      name: 'Melissa.com',
      url: 'https://melissa.com',
      parsedData: [NAME, STREET_ADDRESS, POSTAL_CODE, GEO_LOCATION],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 9,
      name: 'a-third-tech.com',
      url: '#',
      parsedData: [NAME, STREET_ADDRESS, POSTAL_CODE, GEO_LOCATION],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
  ],
};
