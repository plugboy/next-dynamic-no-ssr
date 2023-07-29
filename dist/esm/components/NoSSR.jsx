import dynamic from "next/dynamic";
import React from "react";
var NoSSR = function (_a) {
    var children = _a.children;
    return (<React.Fragment>{children}</React.Fragment>);
};
export default dynamic(function () { return Promise.resolve(NoSSR); }, {
    ssr: false,
});
//# sourceMappingURL=NoSSR.jsx.map