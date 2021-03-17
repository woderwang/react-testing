import React from 'react';
import { connect } from 'dva';
function DvaComponent(props) {
    const { dvaname } = props;
    return <div data-testid="dva-test">{dvaname || 'dva'}</div>;
}
function fieldMaps({ app }) {
    return { dvaname: app.dvaname }
}
export default connect(fieldMaps)(DvaComponent);