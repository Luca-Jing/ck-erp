import React, { FC } from "react";
import MainLayout from "layouts/MainLayout";
import { Switch, Route } from "react-router-dom";
import { HierarchyContainer } from "containers";

const App: FC<{}> = () => {
  const routes = (
    <Switch>
      <Route path="/hierarchy" children={HierarchyContainer} />
    </Switch>
  );

  return <MainLayout>{routes}</MainLayout>;
};

export default App;
