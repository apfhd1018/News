import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};
//?는 값이 선택적이라는 의미. 있을수도 없을수도 있음
//URL파라미터가 없으면 전체 카테고리를 선택한 것으로 간주
export default App;
