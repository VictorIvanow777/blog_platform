# Блог платформа - проект 21308

## Тема  
Здравословен начин на живот

## Описание на проекта

Проектът е блог платформа със следните компоненти:  
- Потребители с роли (автори, редактори)  
- Категории: Хранене, Упражнения, Психично здраве  
- Тагове за маркиране на публикации  
- Публикации с различен статус (чернова, публикувана) и броячи за преглеждания и коментари  

## Файлове в проекта

- `insert.js` - Вкарва начални данни в MongoDB базата `blog_platform_21308`.  
- `query.js` - Примери за заявки и промени върху базата.

## Инструкции за стартиране

1. Инсталирайте MongoDB, ако не е инсталиран.  
2. Създайте папка на компютъра си за проекта.  
3. Поставете файловете `insert.js`, `query.js` и `README.md` в папката.  
4. Отворете терминала и се преместете в папката с проекта.  
5. Стартирайте следната команда за да вкарате данните:  
```bash
mongo insert.js
