export interface Stat {
  id: string
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export const companyStats: Stat[] = [
  {
    id: '1',
    value: 50,
    label: 'Projects Delivered',
    suffix: '+'
  },
  {
    id: '2',
    value: 30,
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    id: '3',
    value: 99.9,
    label: 'Uptime Guarantee',
    suffix: '%'
  },
  {
    id: '4',
    value: 5,
    label: 'Years Experience',
    suffix: '+'
  }
]