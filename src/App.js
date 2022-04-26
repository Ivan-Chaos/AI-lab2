import { useState } from "react";
import InputTable from "./InputTable/InputTable";
import PairedComparisonMatrix from "./PairedComparisonMatrix/PairedComparisonMatrix";
import Charts from './Charts/Charts'
import classes from './App.module.scss'
import { Button, Dialog, DialogTitle } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function App() {

  const [info, showInfo] = useState(false);

  const columns = [
    { key: 'more4.5', name: '>4.5' },
    { key: 'more5.5', name: '>5.5' },
    { key: 'more6.5', name: '>6.5' },
    { key: 'more7', name: '>7' },
    { key: 'more7.5', name: '>7.5' },
    { key: 'more8', name: '>8' }
  ];

  const [mx, setMx] = useState({});


  const [data, setData] = useState([
    {
      'more4.5': 12,
      'more5.5': 10,
      'more6.5': 6,
      'more7': 4,
      'more7.5': 1.5,
      'more8': 1
    }
  ]);

  return (
    <div className={classes.App}>
      <div className={classes.container}>

        <div>
          <h1>Обчислення нечітких множин</h1>
          <Button variant="contained" style={{ marginRight: '1em' }} onClick={() => showInfo(true)}>Додаткова інформація</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setData([
                {
                  'more4.5': 12,
                  'more5.5': 10,
                  'more6.5': 7,
                  'more7': 4,
                  'more7.5': 1.5,
                  'more8': 1
                }
              ]);
            }}
          >
            Рестарт обчислень
          </Button>
        </div>

        <hr />

        <div>
          <h1>Вхідні дані</h1>
          <InputTable columns={columns} rows={data} setRows={setData} />
        </div>

        <hr />

        <div>
          <h1>Матриця попарних порівнянь</h1>
          <PairedComparisonMatrix columns={columns} data={data} setMX={setMx} />
        </div>

        <hr />

        <div>
          <h1>Графіки</h1>
          <Charts mx={mx} columns={columns} data={data} />
        </div>

      </div>

      <Dialog
        open={info}
        onClose={showInfo}
      >
        <DialogTitle>
          Додаткова інформація
        </DialogTitle>
        <DialogContent>
          <div>
            «І́ндекс я́кості життя́» (англ. quality-of-life index) розроблений компанією «Economist Intelligence Unit», ґрунтується на методології, яка пов'язує підсумки досліджень по
            Індекс якості життя, 2019
            суб'єктивній оцінці життя в країнах, з об'єктивними визначниками якості життя в цих країнах. Він охоплює дані по 80 країнам.
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Where-to-be-born-index-2013.jpg/450px-Where-to-be-born-index-2013.jpg" />
          </div>
          <hr />
          <div>
            Нечіткі множини(НМ) є структурами даних , до яких застосовують спеціальні формули і алгоритми   нечітких обчислень при моделюванні задач ШІ.
            Вхідною інформацією для побудови нечіткої множини (НМ) заданої властивості(вага, ріст, вартість і т.п.) є експертні парні порівняння. Вони  визначають  відношення між елементами  базової множини. Для кожної пари елементів універсальної базової  множини експерт оцінює перевагу одного елемента над іншим стосовно властивості НМ.
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => showInfo(false)}>Закрити</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
