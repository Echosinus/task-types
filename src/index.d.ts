/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type Typerson = { name: string; age: number; gender: 'female' | 'male' };
export function getPersons(): Array<Typerson>;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
type PerEmp = Typerson & { company: string };
export function personToString(user: Typerson | PerEmp): string;
