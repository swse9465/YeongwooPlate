import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchStores from "../routes/SearchStores";
import Main from "../routes/Main";
//import Main from "./Loader";
import DetailReview from "../routes/DetailReview";
import CreateReview from "../routes/CreateReview";
import DetailStore from "../routes/DetailStore";
import MyPage from "../routes/MyPage";
import JMT from "../routes/JMT";
import Category from "../routes/Category";

const AppRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/detailReview/*" component={DetailReview} />
      <Route path="/createReview" component={CreateReview} />
      <Route path="/detailStore/*" component={DetailStore} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/jmt/*" component={JMT} />
      <Route path="/Category" component={Category} />
      <Route
        path="/search/:value"
        render={() => (
          <SearchStores
            onSearchStores={props.onSearchStores}
            stores={props.all.stores}
            isLoading={props.all.isLoading}
            error={props.all.error}
          />
        )}
      />

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
