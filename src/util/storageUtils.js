const SERVICES_KEY = 'services';

export function loadConfig() {
  const services = localStorage.getItem(SERVICES_KEY);

  return services == null ? null : { services: JSON.parse(services) };
}

export function saveServices(services) {
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
}
