import ChildComponent from "./ChildComponent.jsx";

function Parent() {
    const name = "John";
    const age = 30;

    return (
        <div>
            <ChildComponent name= {name} age={age} />
        </div>
    );
}

export default Parent;