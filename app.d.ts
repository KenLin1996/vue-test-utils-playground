// 為了讓 ts 辨認 .vue 檔案，要在 tsconfig.app.json 的 include 新增 app.d.ts
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
