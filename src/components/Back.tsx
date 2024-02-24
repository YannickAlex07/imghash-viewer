import { useNavigate } from "react-router-dom";

function Back() {
    const navigate = useNavigate();

    return (
        <div>
            <button className="btn" onClick={() => navigate("/")}>
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                </svg>
                Back
            </button>
        </div>
    )
}

export default Back;