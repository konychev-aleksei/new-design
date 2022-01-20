import React, { useState } from "react";
import style from "./style.module.scss";

const tabsInfo = [
  {
    title: "Карта организации",
    url: "info",
    filled: true,
    redirect: false,
  },
  { title: "Банковские счета", url: "accounts", filled: true, redirect: false },
  { title: "Сотрудники", url: "staff", filled: true, redirect: false },
  { title: "Кошелек", url: "wallet", filled: true, redirect: false },
  { title: "Задачи на проверку", url: "task", filled: true, redirect: false },
  { title: "Настройка", url: "settings", filled: true, redirect: false },
];

export const TabToggler = ({ currentTab, setCurrentTab, item }) => {
  return (
    <div
      onClick={() => setCurrentTab(item.url)}
      className={style.toggler}
      style={currentTab ? { background: "#3B93AF", color: "white" } : {}}
    >
      <div className={style.title}>{item.title}</div>
      <div className={style.plot}></div>
    </div>
  );
};

export const TabsPanel = () => {
  const initialTab = tabsInfo.length ? tabsInfo[0].url : null;
  const [currentTab, setCurrentTab] = useState(initialTab);

  return (
    <div className={style.wrapper}>
      {tabsInfo.map((item) => (
        <TabToggler
          currentTab={currentTab === item.url}
          setCurrentTab={setCurrentTab}
          item={item}
        />
      ))}
    </div>
  );
};
