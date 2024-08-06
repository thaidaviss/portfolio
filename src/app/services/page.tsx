'use client';
const services = [
  {
    number: '01',
    name: '',
    description: '',
  },
  {
    number: '02',
    name: '',
    description: '',
  },
  {
    number: '03',
    name: '',
    description: '',
  },
  {
    number: '04',
    name: '',
    description: '',
  },
  {
    number: '05',
    name: '',
    description: '',
  },
  {
    number: '06',
    name: '',
    description: '',
  },
];
function Services() {
  return (
    <div>
      {services.map(item => (
        <div key={item.number}>{item.name}</div>
      ))}
    </div>
  );
}

export default Services;
