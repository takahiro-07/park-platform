class Api::HelloController < ApplicationController
  require 'google/cloud/firestore'

  def index
    index_firestore
    render json: { id: 1, name: "リスト" } , status: :ok
  end

  def create
    save_firestore
    head :no_content
  end

  private

  def save_firestore
    firestore = Google::Cloud::Firestore.new(project_id: 'park-platform', credentials: File.new('park-platform-firebase-adminsdk-x8tzh-9cebe8cf2b.json').to_path)
    doc_ref = firestore.doc("todos/1")
    snapshots = []

    # Watch the document.
    listener = doc_ref.listen do |snapshot|
      logger.debug("Received document snapshot: #{snapshot.document_id}")
      snapshots << snapshot
    end

    data = {
      name:    "Tokyo",
      country: "Japan"
    }

    doc_ref.set({
      "samples": {
        "test1": true,
        "test2": true,
        "test3": true
      }
    }, merge:true)

    # doc_ref.set({email: "test3@test.com", text: "test", title: "backend"}) # 値を書き込む
  end

    def index_firestore
    firestore = Google::Cloud::Firestore.new(project_id: 'park-platform', credentials: File.new('park-platform-firebase-adminsdk-x8tzh-9cebe8cf2b.json').to_path)
    # doc_ref = firestore.doc("todos/1/review/2") # 保存先のパスを指定
    # logger.debug(doc_ref)
  end
end
