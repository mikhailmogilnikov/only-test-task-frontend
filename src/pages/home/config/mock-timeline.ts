import { ITimeline } from '@/entities/timeline';

export const MockTimelines: ITimeline[] = [
  { id: 1, name: 'Наука', startYear: 1980, endYear: 1987, events: [] },
  { id: 2, name: 'Фильмы', startYear: 1988, endYear: 1994, events: [] },
  { id: 3, name: 'Люди', startYear: 1995, endYear: 1999, events: [] },
  { id: 4, name: 'Разное', startYear: 2000, endYear: 2006, events: [] },
  { id: 5, name: 'Животные', startYear: 2007, endYear: 2020, events: [] },
];
