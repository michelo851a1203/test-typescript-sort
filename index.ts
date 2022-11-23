export interface MainType {
  name: string;
  age: number;
}
export const mainHandler = () => {
  const userInfoList: MainType[] = [
    {
      name: 'john',
      age: 12,
    },
    {
      name: 'leo',
      age: 32,
    },
    {
      name: 'Sunny',
      age: 17,
    },
  ];

  const input = userInfoList.sort((prev, next) => prev.age - next.age);
  console.log(input);
  return input;
}
