class Api::HelloController < ApplicationController
  require 'google/cloud/firestore'

  def index
    render json: { id: 1, name: "リスト" } , status: :ok
  end

  def create
    save_firestore
    head :no_content
  end

  private

  def save_firestore
    firestore = Google::Cloud::Firestore.new(project_id: 'park-platform', credentials: File.new('park-platform-firebase-adminsdk-x8tzh-9cebe8cf2b.json').to_path)
    doc_ref = firestore.doc("todos/1") # 保存先のパスを指定
    doc_ref.set({email: "test@test.com", text: "test", title: "backend"}) # 値を書き込む
  end
end
