import { AxiosRequestHeaders } from "axios";
import { FormEvent } from "react";

import {
  BalcaoDoCondutor,
  BalcaoDoCondutorProps,
} from "@ama/portal-unico-data-client";
import { Nav } from "./Nav";

let clientInstance: BalcaoDoCondutor;
const getClient = (token: string): BalcaoDoCondutor => {
  if (!clientInstance) {
    clientInstance = new BalcaoDoCondutor({
      baseURL:
        "https://dev-apigw-3-pdun.northeurope.cloudapp.azure.com/gateway",
      headers: {
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders,
    } as BalcaoDoCondutorProps);
  }

  return clientInstance;
};

const LicencePoints = () => {
  const client = getClient(
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwaGRQX1VjeEh4SEZiRE0xWV9XcXBXWWpIQm5wUGx2Q1BHYi1VeVE4OHBnIn0.eyJleHAiOjE2NjI3MjQ2NzgsImlhdCI6MTY2MjcyNDM3OCwiYXV0aF90aW1lIjoxNjYyNzE0MzYzLCJqdGkiOiIyYjZlOTA1MS0wNThkLTQ5M2QtODdjMC05YzJjYjA3ZjRlZmQiLCJpc3MiOiJodHRwczovL2Rldi1hcGlndy0yLXBkdW4ubm9ydGhldXJvcGUuY2xvdWRhcHAuYXp1cmUuY29tOjg0NDMvcmVhbG1zL2ZhIiwic3ViIjoiNmIwZmFiOTUtNWVhYy00NTYxLTg1NDctOGFhZGE5MzBiMTI3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGljYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjNlNDRjOTFhLTdiZmItNDA1MS1hYTU5LTUyNWFkNDVmOGFjMSIsInNjb3BlIjoib3BlbmlkIiwic2lkIjoiM2U0NGM5MWEtN2JmYi00MDUxLWFhNTktNTI1YWQ0NWY4YWMxIiwibGFzdF9uYW1lIjoiSmVzdXMiLCJuaWMiOiIxMzE4NDMxNSIsIm5pZl9lbmNyeXB0ZWQiOiIxNTZlNjQ4MTRjY2MzYjgyODY1MDFhM2Q4MmM3ZTMxNjIyN2YxZWFiYTUxNDAwMDcyYTcwMmJiZmM1NDEzZTgyMDFjZWY4ZWZhYjk3N2ZjOTljYjUzNzhhMjQ4ZTllYjM4NmI1NzlkZGUyODczMTUxMzYyYzJmMzM3NjcxNThmZjg4MzA1MmI3OGNkZWE5YzU5YjY0Y2RiZjE4ODcwYWE0MWJmNzRhMDQ1NjhlZTE0ZmY0N2MwNTc3Njc3MGM4NGU3N2Q2YWZlZTc3MGI3ZmFkNWUyMzcyZWQ2ZmY1ZTdmMDFiMDQ5MTk4ZWQ3NjZmNzgwOWM5MzUxZmYwY2FmMjBjMDgxOTU2NWJkZjQzOTM1OGU2YjNiNzE3MmQxOWFmOTZiNTc2ZjU0MjA0MGM0ZWFkYzA4YmNkMDY1ZjlhZjk2NDQ3NDJmMWJhYjA3NTY0ZTViZjc4YzFhOTk0YzA3ZGY2NmIwYmQxMDRlMzFmM2FiZDM0YmQ4Nzg0M2Y1ODMyMjM0MDc5NmNkN2UwNTk2ZDZmOWYyMDdiYzBkM2VmM2VhMWRlZjlkNjVhNTE2YTVlYTYzZDlhOTBiZmFlNmY4ZmEwOWJkZjJiZWJlMmIxOTlmOTgyMzdlOTViMmQzMGQzMWQ5OGJlZjk2ZTYxOWM3NzFjZWNhYmVkMTg4NWVlMzdlZCIsImNtZCI6eyJodHRwOi8vaW50ZXJvcC5nb3YucHQvTURDL0NpZGFkYW8vTklDIjoiMTMxODQzMTUiLCJodHRwOi8vaW50ZXJvcC5nb3YucHQvTURDL0NpZGFkYW8vTm9tZVByb3ByaW8iOiJSaWNhcmRvIiwiaHR0cDovL2ludGVyb3AuZ292LnB0L01EQy9DaWRhZGFvL05vbWVBcGVsaWRvIjoiSmVzdXMiLCJodHRwOi8vaW50ZXJvcC5nb3YucHQvTURDL0NpZGFkYW8vTklGQ2lmcmFkbyI6IjE1NmU2NDgxNGNjYzNiODI4NjUwMWEzZDgyYzdlMzE2MjI3ZjFlYWJhNTE0MDAwNzJhNzAyYmJmYzU0MTNlODIwMWNlZjhlZmFiOTc3ZmM5OWNiNTM3OGEyNDhlOWViMzg2YjU3OWRkZTI4NzMxNTEzNjJjMmYzMzc2NzE1OGZmODgzMDUyYjc4Y2RlYTljNTliNjRjZGJmMTg4NzBhYTQxYmY3NGEwNDU2OGVlMTRmZjQ3YzA1Nzc2NzcwYzg0ZTc3ZDZhZmVlNzcwYjdmYWQ1ZTIzNzJlZDZmZjVlN2YwMWIwNDkxOThlZDc2NmY3ODA5YzkzNTFmZjBjYWYyMGMwODE5NTY1YmRmNDM5MzU4ZTZiM2I3MTcyZDE5YWY5NmI1NzZmNTQyMDQwYzRlYWRjMDhiY2QwNjVmOWFmOTY0NDc0MmYxYmFiMDc1NjRlNWJmNzhjMWE5OTRjMDdkZjY2YjBiZDEwNGUzMWYzYWJkMzRiZDg3ODQzZjU4MzIyMzQwNzk2Y2Q3ZTA1OTZkNmY5ZjIwN2JjMGQzZWYzZWExZGVmOWQ2NWE1MTZhNWVhNjNkOWE5MGJmYWU2ZjhmYTA5YmRmMmJlYmUyYjE5OWY5ODIzN2U5NWIyZDMwZDMxZDk4YmVmOTZlNjE5Yzc3MWNlY2FiZWQxODg1ZWUzN2VkIn0sImZpcnN0X25hbWUiOiJSaWNhcmRvIn0.dOhzMItyfQUd_X9S3ihFG1xOH93D_zMZEErx7778eS_HPo-zzP2s6xQ4etxL2NQMyyy5Jsqd-2qFgXIXZfGibF13_WEQ-iA-3dWQ7m9Qf24oLmUADVoK_7T_-AHSrD0b04J8gQB0mOaef6ybgb4nv591j6mRI3TdQkuTl1v2KEjQBLTIPi0WsEs6Bse-MtMPrddYhzlk-jZ63vLpAhsxdN7XHLk6dGRF1Ad3Z5KjzanShvtZfDIjQwcPCryg_ZH6-03D6fL2oEFI45t9ZLlgsvujxN-CmxzFKUyTCbEStkf39b8vt1WLEcyvFdIJxh-PJxvAqC4MWCbpkhpObi-7rg"
  );

  const fetch = async (nic: string) => {
    const res = await client.getLicencePoints(nic);

    if (res.error) {
      console.error(res.error);
    } else {
      console.log(res.data);
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);
    const nic = data.get("nic")?.toString();

    if (nic) {
      fetch(nic);
    }
  };

  return (
    <div>
      <Nav />

      <h1>Licence Points</h1>

      <form onSubmit={submitHandler}>
        <input
          type="radio"
          id="ok"
          name="nic"
          value="11111111"
          defaultChecked
        />
        <span style={{ margin: "0px 10px" }}>|</span>
        <label htmlFor="ok">OK (11111111)</label>
        <br />

        <input type="radio" id="not-found-1" name="nic" value="11111110" />
        <span style={{ margin: "0px 10px" }}>|</span>
        <label htmlFor="not-found-1">NOT FOUND (11111110)</label>
        <br />

        <input type="radio" id="not-found-2" name="nic" value="12345678" />
        <span style={{ margin: "0px 10px" }}>|</span>
        <label htmlFor="not-found-2">NOT FOUND (12345678)</label>
        <br />

        <div style={{ margin: "10px" }}>
          <hr />
        </div>

        <button type="submit">Test</button>
      </form>
    </div>
  );
};

export { LicencePoints };
