import { ADDRESS, HOMESTEAD, NAME, PHONE, ZIP } from '../shared/constants';

const defaultPriorities = {
  [NAME]: [],
  [ADDRESS]: [],
  [ZIP]: [],
  [PHONE]: [],
};

export default {
  priorities: new Map(Object.entries(defaultPriorities)),
  services: [
    {
      id: 1,
      name: 'Hillsborough County Property Appraiser',
      url: 'https://gis.hcpafl.org/propertysearch',
      parsedData: [NAME, HOMESTEAD, ADDRESS, ZIP],
      requiresApiKey: false,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 2,
      name: 'Melissa.com',
      url: 'https://melissa.com',
      parsedData: [NAME, ADDRESS, ZIP, PHONE],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 3,
      name: 'a-third-tech.com',
      url: '#',
      parsedData: [NAME, ADDRESS, ZIP, PHONE],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 4,
      name: 'Hillsborough County Property Appraiser',
      url: 'https://gis.hcpafl.org/propertysearch',
      parsedData: [NAME, HOMESTEAD, ADDRESS, ZIP],
      requiresApiKey: false,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 5,
      name: 'Melissa.com',
      url: 'https://melissa.com',
      parsedData: [NAME, ADDRESS, ZIP, PHONE],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 6,
      name: 'a-third-tech.com',
      url: '#',
      parsedData: [NAME, ADDRESS, ZIP, PHONE],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 7,
      name: 'Hillsborough County Property Appraiser',
      url: 'https://gis.hcpafl.org/propertysearch',
      parsedData: [NAME, HOMESTEAD, ADDRESS, ZIP],
      requiresApiKey: false,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 8,
      name: 'Melissa.com',
      url: 'https://melissa.com',
      parsedData: [NAME, ADDRESS, ZIP, PHONE],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
    {
      id: 9,
      name: 'a-third-tech.com',
      url: '#',
      parsedData: [NAME, ADDRESS, ZIP, PHONE],
      requiresApiKey: true,
      apiKey: '',
      isEnabled: false,
    },
  ],
};
