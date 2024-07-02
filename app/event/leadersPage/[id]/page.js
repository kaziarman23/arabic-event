import React from "react";

function page({ params }) {
    const { id } = params;
    return <div>page numbers is : {id}</div>;
}

export default page;
