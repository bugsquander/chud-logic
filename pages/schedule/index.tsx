import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';
import styles from './schedule.module.css';

import {
  useSession,
  useSupabaseClient,
  useSessionContext
} from '@supabase/auth-helpers-react';

export default function Schedule() {
  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      {session ? (
        <>
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[googleCalendarPlugin, listPlugin]}
          initialView="listWeek"
          weekends={true}
          firstDay={1}
          nowIndicator={true}
          selectable={false}
          height="100%"
          googleCalendarApiKey={process.env.GOOGLE_API_KEY}
          eventSources={[
            { googleCalendarId: process.env.GOOGLE_CALENDAR_ID }
          ]}
        />
      </div>
        </>
      ) : (
        <>
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[googleCalendarPlugin, listPlugin]}
          initialView="listWeek"
          weekends={true}
          firstDay={1}
          nowIndicator={true}
          selectable={false}
          height="100%"
          googleCalendarApiKey={process.env.GOOGLE_API_KEY}
          eventSources={[
            { googleCalendarId: process.env.GOOGLE_CALENDAR_ID }
          ]}
        />
      </div>
        </>
      )}
    </>
  );
}
