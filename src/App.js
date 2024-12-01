import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {

  const todos = [
    {  rowNumber: 1,  rowDescription: 'Feed Dog',  rowAssigned: 'User One'},
    {  rowNumber: 2,  rowDescription: 'Water Plants',  rowAssigned: 'User Two'},
    {  rowNumber: 3,  rowDescription: 'Make dinner',  rowAssigned: 'User One'}
  ]

  return (
    <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>
          <div className='card-body'>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Assigned</th>
                </tr>
              </thead>
              <tbody>
                <TodoRowItem rowNumber={todos[0].rowNumber} rowDescription={todos[0].rowDescription} rowAssigned={todos[0].rowAssigned}/>
                <TodoRowItem rowNumber={todos[1].rowNumber} rowDescription={todos[1].rowDescription} rowAssigned={todos[1].rowAssigned}/>
                <TodoRowItem rowNumber={todos[2].rowNumber} rowDescription={todos[2].rowDescription} rowAssigned={todos[2].rowAssigned}/>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default App;
