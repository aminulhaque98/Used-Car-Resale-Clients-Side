import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - NationWide Used Car Resale`;
    }, [title]);
}

export default useTitle;