import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
// Dùng package query-string để parse
import queryString from 'query-string';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  // Muốn lấy query Params thì phải lấy được thông tin của Location
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  // console.log('RouteMatch', match);
  // console.log(history);
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params);

    return params.status || 'all';
  });

  // Mỗi khi location.search thay đổi mình sẽ cập nhật filterStatus = params.status
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  function handleTodoClick(todo, index) {
    // clone curent array to the new one
    const newTodoList = [...todoList];

    // Toggle state and update todo list
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  }

  const handleShowAllclick = () => {
    // setFilteredStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedclick = () => {
    // setFilteredStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewclick = () => {
    // setFilteredStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === 'all' || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
  };

  return (
    <div>
      <h3>What to do?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3 style={{ fontSize: '40px' }}>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllclick}>Show All</button>
        <button onClick={handleShowCompletedclick}>Show Completed</button>
        <button onClick={handleShowNewclick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
