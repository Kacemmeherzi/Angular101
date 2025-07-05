export interface Employee {
  id: number;
  name: string;
  department: string;
  isPresent: boolean;
}
export const Employees: Employee[] = [
  {
    id: 1,
    name: 'Sarah Ben Ali',
    department: 'Finance',
    isPresent: true,
  },
  {
    id: 2,
    name: 'Ahmed Kacem',
    department: 'IT',
    isPresent: false,
  },
  {
    id: 3,
    name: 'Hanen Belkacem',
    department: 'HR',
    isPresent: true,
  },
];
