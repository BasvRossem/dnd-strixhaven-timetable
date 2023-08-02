import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Appointments,
  Scheduler,
  WeekView as WeekViewStyle,
} from '@devexpress/dx-react-scheduler-material-ui';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Paper from '@mui/material/Paper';
import { DateTime } from "luxon";
import { useState } from 'react';
import './App.css';
import { Course, characters, courses } from './data/data';
import { PossibleLanguages, languages } from './data/languageStrings';

const currentDate = '2023-01-01';

function AppointmentContent(props: any) {
  const { data } = props;
  const startDate = new Date(data.startDate).getHours() < 10 ? `0${new Date(data.startDate).getHours()}` : new Date(data.startDate).getHours();
  const endDate = new Date(data.endDate).getHours() < 10 ? `0${new Date(data.endDate).getHours()}` : new Date(data.endDate).getHours();
  const students = Course.byName(data.title)?.characters.sort().join(", ") ?? "";
  return (
    <div className='appointment'>
      <p className='appointment-title'>{data.title}</p>
      <p className='appointment-time'>{startDate}:00-{endDate}:00</p>
      <p className='appointment-students'>{students}</p>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<PossibleLanguages>("en");
  const [name, setName] = useState("");
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as PossibleLanguages);
  }

  const handleNameChange = (event: SelectChangeEvent) => {
    setName(event.target.value);
  }

  function MyDayScaleCell(props: any) {
    const dayNumber = props.startDate.getDate();
    return (
      <th className='day-header'><h2>{languages[language].days[dayNumber - 1]}</h2></th>
    )
  }

  const schedulerData = makeCourses(language)
    .filter(course => name === "" ? true : course.characters.includes(name))
    .map(course => courseToScheduler(course));

  const nameOptions = characters.map(character => (<MenuItem key={character} value={character}>{character}</MenuItem>));

  return (
    <div className="App">
      <Paper className='options'>
        <h2>{languages[language].optionsAndFilters}</h2>
        <Select
          value={language}
          onChange={handleLanguageChange}
        >
          <MenuItem key={"en"} value={"en"}>English</MenuItem>
          <MenuItem key={"nl"} value={"nl"}>Nederlands</MenuItem>
        </Select>
        <Select
          displayEmpty
          value={name}
          onChange={handleNameChange}
        >
          <MenuItem value="">{languages[language].selectName}</MenuItem>
          {nameOptions}
        </Select>
      </Paper>
      <Paper
        sx={{ minWidth: "1100px" }}
      >
        <Scheduler
          data={schedulerData}
        >
          <ViewState
            currentDate={currentDate}
          />
          <WeekViewStyle
            startDayHour={7}
            endDayHour={22}
            cellDuration={60}
            dayScaleCellComponent={MyDayScaleCell}
          />
          <Appointments
            appointmentContentComponent={AppointmentContent}
          />
        </Scheduler>
      </Paper>
    </div >
  )
}

export default App

function makeCourses(language: PossibleLanguages): Course[] {
  courses.forEach(course => course.setSelectedLanguage(language));
  return courses;
}

function courseToScheduler(course: Course): AppointmentModel {
  const date = DateTime.fromFormat(currentDate, "yyyy-MM-dd").set({ hour: course.time }).plus({ day: course.day });
  return {
    startDate: date.toJSDate(),
    endDate: date.plus({ hours: 3 }).toJSDate(),
    title: course.name
  }
}

