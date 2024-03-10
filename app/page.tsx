import Music from "@/app/components/Music";
import WithApollo from "@/app/components/WithApollo";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {__DEV__} from "@apollo/client/utilities/globals";

export default function Home() {

        loadDevMessages();
        loadErrorMessages();
    if (__DEV__) {  // Adds messages only in a dev environment
    }
  return (
    <main className="flex flex-col h-full">
        <div className="flex justify-between mx-4 items-center">
            <div>
                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 4H5a1 1 0 0 0-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"/>
                </svg>
            </div>
            <div>
                ログイン
            </div>
        </div>
        <div>
            <div>
                # 旅行で友達と
            </div>
            <div>
                一緒に作るみんなのプレイリスト
            </div>
            <button type="button">
                ルーム作成
            </button>
        </div>
        <div>
            <div>ただ、3秒でプレイリストを作ってみてください。</div>
        </div>
        {/*<!--
        <WithApollo>
          <Music after={1} first={1}/>
        </WithApollo>
        -->*/}
    </main>
  );
}
