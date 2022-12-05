import { PRIORITIES_KEY, SERVICES_KEY } from '../shared/constants';
import initialConfig from './initialConfig';

export function loadConfig() {
  const loadServices = () => {
    const servicesRaw = localStorage.getItem(SERVICES_KEY);
    return servicesRaw ? JSON.parse(servicesRaw) : null;
  };

  const loadPriorities = () => {
    const prioritiesRaw = localStorage.getItem(PRIORITIES_KEY);
    const prioritiesObj = prioritiesRaw ? JSON.parse(prioritiesRaw) : null;
    return prioritiesObj ? new Map(Object.entries(prioritiesObj)) : null;
  };

  const services = loadServices() || initialConfig.services;

  const priorities = loadPriorities() || initialConfig.priorities;

  return {
    services,
    priorities,
  };
}

export function saveServices(services) {
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
}

export function savePriorities(priorities) {
  localStorage.setItem(PRIORITIES_KEY, JSON.stringify([...priorities]));
}
