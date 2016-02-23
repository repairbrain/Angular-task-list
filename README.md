TaskList Demo Application

Task description:

Реализуйте single-page application, состоящее из двух экранов-страниц.

На индексной странице расположите таблицу со списком задач. Cписок получите из файла tasks.json.

В таблице нужно вывести только активные задачи (поле ‘obj_status’ имеет значение ‘active’);
Кроме имени задачи также выведите теги (поле ‘tags’), время потраченное на задачу (‘actual_effort’), общую оценку задачи (‘estimated_effort’), и дату окончания задачи (‘due_date’) в каком-нибудь человеко-понятном формате;
Название важных задач (‘is_high_priority’) должны выделяться (жирным/другим цветом).

При клике на название задачи в таблице пользователь должен переходить на страницу задачи.

На странице задачи выведите дополнительную информацию о задаче (например description);
при клике на название задачи оно должно редактироваться (inlineeditor) и после сохранения задача должна отправляться на сервер. Сервера нет, поэтому можно просто сделать PUT-запрос на любой адрес.

Должны быть использованы сервисы Angular, такие как $http/$resource, $route, promises, контроллеры, директивы.

Код должен быть покрыт юнит тестами в степени, которая кажется вам разумной.

Ссылка на пример tasks.json
https://docs.google.com/document/d/1YWYIP1_1mL3qWjBKaueWbvwfGB54AOD0aj2Rt6MQdNM/edit?usp=sharing
