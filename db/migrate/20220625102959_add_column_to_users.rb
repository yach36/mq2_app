class AddColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :account_name, :string
    add_column :users, :account_id, :string
  end
end
