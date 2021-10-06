import { CalendarIcon } from '@heroicons/react/solid';
import React from 'react';

export default function ButtonCalendar() {
  var gapi = window.gapi;
  let API_KEY = process.env.REACT_APP_API_KEY;
  let CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

  const setReminder = () => {
    console.log(API_KEY, CLIENT_ID);
    gapi.load('client:auth2', () => {
      console.log('loaded client');

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load('calendar', 'v3', () => console.log('bam!'));
      // console.log(gapi.auth2.getAuthInstance());

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: 'Frisca & Muchtar Wedding',
            location: `https://maps.app.goo.gl/azAXtvvjCjpKjEG78`,
            description: 'Sebuah kisah akhir untuk perjalanan selanjutnya...!',
            start: {
              dateTime: '2021-10-16T17:00:00-09:00',
              timeZone: 'Asia/Jakarta',
            },
            end: {
              dateTime: '2021-10-16T17:00:00-17:00',
              timeZone: 'Asia/Jakarta',
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
              ],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });
        });
    });
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={setReminder}
        className="px-6 py-2 mt-8 rounded-lg text-white font-semibold border border-white flex gap-2 items-center">
        <CalendarIcon className="h-4 w-4 text-white animate-bounce" />
        Set Calendar
      </button>
    </div>
  );
}
