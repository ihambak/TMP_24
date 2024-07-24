이벤트를 JSON 형식으로 받아서 TOAST UI Calendar에 표시하는 방법을 설명하겠습니다. 이 예제에서는 JSON 형식의 데이터를 처리하여 일정을 추가, 수정, 삭제하는 기능을 구현합니다. JSON 데이터를 통해 일정을 캘린더에 표시하는 부분을 중점적으로 설명하겠습니다.

1. **Calendar.tsx 업데이트**

   - JSON 형식의 데이터를 처리하여 일정을 캘린더에 추가, 수정, 삭제하는 기능을 추가합니다.

```tsx
import React, { Component } from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

interface CalendarProps {}

interface CalendarState {
  schedules: Array<{
    id: string;
    calendarId: string;
    title: string;
    category: string;
    dueDateClass: string;
    start: string;
    end: string;
  }>;
}

class ToastCalendar extends Component<CalendarProps, CalendarState> {
  private calendarRef: React.RefObject<Calendar>;

  constructor(props: CalendarProps) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      schedules: [],
    };
  }

  componentDidMount() {
    this.loadCalendarSchedules();
    this.bindEventHandlers();
  }

  loadCalendarSchedules() {
    const calendarInstance = this.calendarRef.current?.getInstance();
    calendarInstance?.createEvents(this.state.schedules);
  }

  bindEventHandlers() {
    const calendarInstance = this.calendarRef.current?.getInstance();
    calendarInstance?.on('beforeCreateSchedule', this.onBeforeCreateSchedule);
    calendarInstance?.on('beforeUpdateSchedule', this.onBeforeUpdateSchedule);
    calendarInstance?.on('beforeDeleteSchedule', this.onBeforeDeleteSchedule);
  }

  onBeforeCreateSchedule = (event: any) => {
    const newSchedule = {
      id: String(this.state.schedules.length + 1),
      calendarId: event.calendarId || '1',
      title: event.title,
      category: 'time',
      dueDateClass: '',
      start: event.start.toDate(),
      end: event.end.toDate(),
    };

    this.setState(
      (prevState) => ({
        schedules: [...prevState.schedules, newSchedule],
      }),
      () => {
        this.loadCalendarSchedules();
      }
    );
  };

  onBeforeUpdateSchedule = (event: any) => {
    const { schedule, changes } = event;

    this.setState(
      (prevState) => ({
        schedules: prevState.schedules.map((item) =>
          item.id === schedule.id
            ? {
                ...item,
                ...changes,
                start: changes.start?.toDate() || item.start,
                end: changes.end?.toDate() || item.end,
              }
            : item
        ),
      }),
      () => {
        this.loadCalendarSchedules();
      }
    );
  };

  onBeforeDeleteSchedule = (event: any) => {
    const { schedule } = event;

    this.setState(
      (prevState) => ({
        schedules: prevState.schedules.filter((item) => item.id !== schedule.id),
      }),
      () => {
        this.loadCalendarSchedules();
      }
    );
  };

  handleJsonEvent = (jsonEvent: string) => {
    const event = JSON.parse(jsonEvent);

    switch (event.type) {
      case 'create':
        this.onBeforeCreateSchedule(event.data);
        break;
      case 'update':
        this.onBeforeUpdateSchedule(event.data);
        break;
      case 'delete':
        this.onBeforeDeleteSchedule(event.data);
        break;
      default:
        console.error('Unknown event type:', event.type);
    }
  };

  render() {
    return (
      <div>
        <Calendar
          ref={this.calendarRef}
          height="800px"
          calendars={[
            {
              id: '1',
              name: 'My Calendar',
              color: '#ffffff',
              bgColor: '#9e5fff',
              dragBgColor: '#9e5fff',
              borderColor: '#9e5fff',
            },
          ]}
          useCreationPopup={true}
          useDetailPopup={true}
          week={{
            showTimezoneCollapseButton: true,
            timezonesCollapsed: false,
          }}
          month={{
            daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            startDayOfWeek: 0,
            narrowWeekend: true,
          }}
          schedules={this.state.schedules}
        />
        {/* Example JSON event handler button for demonstration */}
        <button onClick={() => this.handleJsonEvent(JSON.stringify({
          type: 'create',
          data: {
            title: 'New Event',
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour later
            calendarId: '1',
          }
        }))}>Create Event</button>
      </div>
    );
  }
}

export default ToastCalendar;
```

2. **App.tsx 업데이트**
   - `App.tsx`는 이전 예제와 동일하게 유지합니다.

```tsx
import React from 'react';
import './App.css';
import ToastCalendar from './Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TOAST UI Calendar with React and TypeScript</h1>
      </header>
      <main>
        <ToastCalendar />
      </main>
    </div>
  );
}

export default App;
```

### 설명

1. **`handleJsonEvent` 메서드**:
   - 이 메서드는 JSON 문자열로 받은 이벤트 데이터를 처리합니다.
   - `JSON.parse(jsonEvent)`로 JSON 문자열을 객체로 변환합니다.
   - 이벤트의 타입 (`type`)에 따라 적절한 메서드 (`onBeforeCreateSchedule`, `onBeforeUpdateSchedule`, `onBeforeDeleteSchedule`)를 호출하여 일정을 처리합니다.

2. **`onBeforeCreateSchedule`, `onBeforeUpdateSchedule`, `onBeforeDeleteSchedule` 메서드**:
   - 각 메서드는 일정을 생성, 수정, 삭제하는 기능을 수행합니다.
   - 상태(`state`)를 업데이트하고, 업데이트된 일정을 캘린더에 다시 로드합니다.

3. **버튼 이벤트 핸들러**:
   - 예시로 추가한 버튼을 통해 JSON 이벤트를 트리거할 수 있습니다. 
   - 실제 환경에서는 서버나 다른 소스에서 JSON 데이터를 받아 처리하는 로직으로 확장할 수 있습니다.

이제 JSON 데이터를 받아서 캘린더에 일정을 표시할 수 있습니다. 이 구조를 사용하면 서버로부터 JSON 데이터를 받아와 캘린더를 동적으로 업데이트할 수 있습니다. 예를 들어, 서버에서 일정 데이터를 주기적으로 받아와 `handleJsonEvent` 메서드를 통해 처리하면 됩니다.