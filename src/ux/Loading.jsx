import { Spinner } from "flowbite-react";

export default function Loading() {
    return (
        <div className="flex flex-wrap gap-2">
            <div className="text-center">
                <Spinner aria-label="FI Group Page loading..." size="md" color="warning" />
            </div>
        </div>
    );
}
