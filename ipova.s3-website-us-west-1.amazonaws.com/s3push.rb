#!/usr/bin/env ruby

# encoding: utf-8

if __FILE__ == $0

require 'pathname'
require 'aws'

s3 = AWS::S3.new(
  access_key_id: 'AKIAI42GB3TAHPEU2VWA',
  secret_access_key: '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'
)

bucket = s3.buckets['ipova']

git_log = `git log -1 --pretty="format:" --name-only .`
uploading_files = git_log.split($/).compact.reject(&:empty?)

uploading_files.each do |f|
  puts Pathname.new(f).to_s
  # bucket[f].write Pathname.new(f)
end

end
