document.addEventListener('DOMContentLoaded', () => {
  const services = document.querySelectorAll('.service');
  services.forEach(service => {
    service.addEventListener('click', () => {
      const serviceName = service.getAttribute('data-name');
      alert(`You selected: ${serviceName}`);
    });
  });
});
