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
    <main className="flex bg-indigo-500">
        <WithApollo>
          <Music after={1} first={1}/>
        </WithApollo>
    </main>
  );
}
