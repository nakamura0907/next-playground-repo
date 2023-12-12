import { Suspense } from "react";
import { ArticleListContainer } from "./_components/ArticleList";

const Page = () => {
    return(
        <>
            {/* <SomeClientComponnet /> */}
            <div>
                <p>"use client"はSCとCCの境界線に書く</p>
                <p>
                    非同期コンポーネントはContainerとPresentationに分けて、Containerを非同期関数のテストのように、
                    PresentationをStorybookなどでテストする
                </p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <ArticleListContainer />
            </Suspense>
        </>
    )
}

export default Page;