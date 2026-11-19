// Imports
import { heroApi } from "../api/hero.api";

// Interfaces
import type { SummaryInformationResponse } from "../interfaces/summary-information.response";

export const getSummaryAction = async (): Promise<SummaryInformationResponse> => {
    try {
        const { data } = await heroApi.get<SummaryInformationResponse>('/summary');
        return data;
    } catch (error) {
        throw error;
    }
}
