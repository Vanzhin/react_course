import React from 'react';
import HeaderLink from "../components/HeaderLink";

function NotFoundPage({children, to}) {
    return (
        <div>не найдено <HeaderLink to={to}>{children}</HeaderLink></div>
    );
}

export default NotFoundPage;