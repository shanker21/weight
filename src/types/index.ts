export interface ClinicVariables {
  CLINIC_INFO: {
    PHONE: string;
    WHATSAPP_NUMBER: string;
    WHATSAPP_MESSAGE: string;
  };
  PRICING: {
    MOUNJARO: Record<string, string>;
    WEGOVY: Record<string, string>;
  };
  WEEKLY_PRICING: {
    MOUNJARO: Record<string, string>;
    WEGOVY: Record<string, string>;
  };
}