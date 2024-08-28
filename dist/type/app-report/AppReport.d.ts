export type AppReportQuestionnaire = {
    name: string;
    fields: AppReportFieldQuestion[];
};
export type AppReportAnswers = {
    name: string;
    fields: AppReportFieldAnswer[];
};
export type AppReportFieldQuestion = {
    name: string;
    description: string;
};
export type AppReportFieldAnswer = {
    name: string;
    answer: string | undefined;
};
//# sourceMappingURL=AppReport.d.ts.map