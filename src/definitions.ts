export interface CalendarEventOptions {
  id?: string;
  title?: string;
  location?: string;
  notes?: string;
  startDate?: number;
  endDate?: number;
  calendarId?: string;
  allDay?: boolean;
  alertOffset?: number;
}

export interface CalendarReminderOptions {
  // id?: string;
  title: string;
  notes: string;
  startDateDay: number;
  startDateMonth: number;
  startDateYear: number;
  startDateHour: number;
  startDateMinute: number;
}

export interface DeleteEventOptions {
  [key: string]: string;
}

export interface CapacitorCalendarPlugin {
  pluginName: string
  openCalendar(options?: { date: number }): Promise<any>
  createEvent(options: CalendarEventOptions): Promise<any>
  createReminder(options: CalendarEventOptions): Promise<any>
  findEvent(options: CalendarEventOptions): Promise<any>
  deleteEvent(options: DeleteEventOptions): Promise<any>
  deleteEventById(options: { id: string }): Promise<any>
  updateEvent(options: CalendarEventOptions): Promise<any>
  getAvailableCalendars(): Promise<any>
}
