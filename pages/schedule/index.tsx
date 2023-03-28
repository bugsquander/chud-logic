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
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-120">
          <div className="flex flex-col space-y-4">
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
                    googleCalendarApiKey={
                      process.env.NEXT_PUBLIC_GOOGLE_API_KEY
                    }
                    eventSources={[
                      {
                        googleCalendarId:
                          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID
                      }
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
                    googleCalendarApiKey={
                      process.env.NEXT_PUBLIC_GOOGLE_API_KEY
                    }
                    eventSources={[
                      {
                        googleCalendarId:
                          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID
                      }
                    ]}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
