import React from "react";
import { CommonButton } from "./newUI/Button/Button";
import { TitlePanel } from "./newUI/TitlePanel/TitlePanel";
import { Map } from "./newUI/Forms/Organisation/Map/Map";
import { Accounts } from "./newUI/Forms/Organisation/Accounts/Accounts";
import { TabsPanel } from "./newUI/TabsPanel/TabsPanel";
import { DropDownList } from "./newUI/DropDownList/DropDownList";
import { EmployeeCard } from "./newUI/EmployeeCard/EmployeeCard";
import style from "./style.module.scss";

const App = () => {
  return (
    <div className={style.wrapper}>
      <TitlePanel
        primaryText={`ЗАО "ХОЛДИНГОВАЯ КОМПАНИЯ "ЮНАЙТ...`}
        secondaryText={"Не проверенная"}
      />
      <div className={style.contents}>
        <TabsPanel />
        {/*<Map />*/}
        {/*<Accounts />*/}
        <DropDownList title={"Управление предприятием (1)"}>
          <EmployeeCard />
        </DropDownList>
      </div>
    </div>
  );
};

export default App;
