import { defaultResponderForAppDir } from "app/api/defaultResponderForAppDir";

import { handler } from "@calcom/features/ee/workflows/api/scheduleEmailReminders";

export const POST = defaultResponderForAppDir(handler);
