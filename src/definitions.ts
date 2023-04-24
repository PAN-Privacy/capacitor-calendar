export interface CalendarEventOptions {
  id?: string;
  title?: string;
  location?: string;
  notes?: string;
  startDate?: number;
  endDate?: number;
  calendarId?: string;
  allDay?: boolean;
  alarmOffset?: number;
}

export interface DateComponent {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
}

export interface CalendarReminderOptions {
  id?: string;
  title: string;
  notes: string;
  startDate: DateComponent;
  dueDate: DateComponent;
  alarmOffset?: number;
}

export interface DeleteEventOptions {
  [key: string]: string;
}

export interface CapacitorCalendarPlugin {
  pluginName: string
  openCalendar(options?: { date: number }): Promise<any>
  createEvent(options: CalendarEventOptions): Promise<any>
  createReminder(options: CalendarReminderOptions): Promise<any>
  findEvent(options: CalendarEventOptions): Promise<any>
  findReminderByTitle(options: { title: string }): Promise<any>
  deleteEvent(options: DeleteEventOptions): Promise<any>
  deleteEventById(options: { id: string }): Promise<any>
  updateEvent(options: CalendarEventOptions): Promise<any>
  getAvailableCalendars(): Promise<any>
}
