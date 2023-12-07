
using namespace System.Management.Automation
using namespace System.Management.Automation.Language

Register-ArgumentCompleter -Native -CommandName 'crunchy-cli' -ScriptBlock {
    param($wordToComplete, $commandAst, $cursorPosition)

    $commandElements = $commandAst.CommandElements
    $command = @(
        'crunchy-cli'
        for ($i = 1; $i -lt $commandElements.Count; $i++) {
            $element = $commandElements[$i]
            if ($element -isnot [StringConstantExpressionAst] -or
                $element.StringConstantType -ne [StringConstantType]::BareWord -or
                $element.Value.StartsWith('-') -or
                $element.Value -eq $wordToComplete) {
                break
        }
        $element.Value
    }) -join ';'

    $completions = @(switch ($command) {
        'crunchy-cli' {
            [CompletionResult]::new('--lang', 'lang', [CompletionResultType]::ParameterName, 'Overwrite the language in which results are returned. Default is your system language')
            [CompletionResult]::new('--credentials', 'credentials', [CompletionResultType]::ParameterName, 'Login with credentials (username or email and password). Must be provided as user:password')
            [CompletionResult]::new('--etp-rt', 'etp-rt', [CompletionResultType]::ParameterName, 'Login with the etp-rt cookie')
            [CompletionResult]::new('--proxy', 'proxy', [CompletionResultType]::ParameterName, 'Use a proxy to route all traffic through')
            [CompletionResult]::new('--user-agent', 'user-agent', [CompletionResultType]::ParameterName, 'Use custom user agent')
            [CompletionResult]::new('-v', 'v', [CompletionResultType]::ParameterName, 'Verbose output')
            [CompletionResult]::new('--verbose', 'verbose', [CompletionResultType]::ParameterName, 'Verbose output')
            [CompletionResult]::new('-q', 'q', [CompletionResultType]::ParameterName, 'Quiet output. Does not print anything unless it''s a error')
            [CompletionResult]::new('--quiet', 'quiet', [CompletionResultType]::ParameterName, 'Quiet output. Does not print anything unless it''s a error')
            [CompletionResult]::new('--experimental-fixes', 'experimental-fixes', [CompletionResultType]::ParameterName, 'Enable experimental fixes which may resolve some unexpected errors')
            [CompletionResult]::new('--anonymous', 'anonymous', [CompletionResultType]::ParameterName, 'Login anonymously / without an account')
            [CompletionResult]::new('-h', 'h', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            [CompletionResult]::new('--help', 'help', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            [CompletionResult]::new('-V', 'V ', [CompletionResultType]::ParameterName, 'Print version')
            [CompletionResult]::new('--version', 'version', [CompletionResultType]::ParameterName, 'Print version')
            [CompletionResult]::new('archive', 'archive', [CompletionResultType]::ParameterValue, 'Archive a video')
            [CompletionResult]::new('download', 'download', [CompletionResultType]::ParameterValue, 'Download a video')
            [CompletionResult]::new('login', 'login', [CompletionResultType]::ParameterValue, 'Save your login credentials persistent on disk')
            [CompletionResult]::new('search', 'search', [CompletionResultType]::ParameterValue, 'Search in videos')
            [CompletionResult]::new('help', 'help', [CompletionResultType]::ParameterValue, 'Print this message or the help of the given subcommand(s)')
            break
        }
        'crunchy-cli;archive' {
            [CompletionResult]::new('-a', 'a', [CompletionResultType]::ParameterName, 'Audio languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('--audio', 'audio', [CompletionResultType]::ParameterName, 'Audio languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('-s', 's', [CompletionResultType]::ParameterName, 'Subtitle languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('--subtitle', 'subtitle', [CompletionResultType]::ParameterName, 'Subtitle languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('-o', 'o', [CompletionResultType]::ParameterName, 'Name of the output file')
            [CompletionResult]::new('--output', 'output', [CompletionResultType]::ParameterName, 'Name of the output file')
            [CompletionResult]::new('--output-specials', 'output-specials', [CompletionResultType]::ParameterName, 'Name of the output file if the episode is a special')
            [CompletionResult]::new('-r', 'r', [CompletionResultType]::ParameterName, 'Video resolution')
            [CompletionResult]::new('--resolution', 'resolution', [CompletionResultType]::ParameterName, 'Video resolution')
            [CompletionResult]::new('-m', 'm', [CompletionResultType]::ParameterName, 'Sets the behavior of the stream merging. Valid behaviors are ''auto'', ''audio'' and ''video''')
            [CompletionResult]::new('--merge', 'merge', [CompletionResultType]::ParameterName, 'Sets the behavior of the stream merging. Valid behaviors are ''auto'', ''audio'' and ''video''')
            [CompletionResult]::new('--ffmpeg-preset', 'ffmpeg-preset', [CompletionResultType]::ParameterName, 'Presets for converting the video to a specific coding format. Available presets: 
  h264 (h264 encoded with default video quality/compression)
  h264-nvidia (h264 encoded with nvidia hardware acceleration)
  h264-apple (h264 encoded with apple hardware acceleration)
  h264-lossless (h264 encoded with lossless video quality/compression)
  h264-normal (h264 encoded with normal video quality/compression)
  h264-low (h264 encoded with low video quality/compression)
  h264-nvidia-lossless (h264 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h264-nvidia-normal (h264 encoded with nvidia hardware acceleration and normal video quality/compression)
  h264-nvidia-low (h264 encoded with nvidia hardware acceleration and low video quality/compression)
  h264-apple-lossless (h264 encoded with apple hardware acceleration and lossless video quality/compression)
  h264-apple-normal (h264 encoded with apple hardware acceleration and normal video quality/compression)
  h264-apple-low (h264 encoded with apple hardware acceleration and low video quality/compression)
  h265 (h265 encoded with default video quality/compression)
  h265-nvidia (h265 encoded with nvidia hardware acceleration)
  h265-apple (h265 encoded with apple hardware acceleration)
  h265-lossless (h265 encoded with lossless video quality/compression)
  h265-normal (h265 encoded with normal video quality/compression)
  h265-low (h265 encoded with low video quality/compression)
  h265-nvidia-lossless (h265 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h265-nvidia-normal (h265 encoded with nvidia hardware acceleration and normal video quality/compression)
  h265-nvidia-low (h265 encoded with nvidia hardware acceleration and low video quality/compression)
  h265-apple-lossless (h265 encoded with apple hardware acceleration and lossless video quality/compression)
  h265-apple-normal (h265 encoded with apple hardware acceleration and normal video quality/compression)
  h265-apple-low (h265 encoded with apple hardware acceleration and low video quality/compression)
  av1 (av1 encoded with default video quality/compression)
  av1-lossless (av1 encoded with lossless video quality/compression)
  av1-normal (av1 encoded with normal video quality/compression)
  av1-low (av1 encoded with low video quality/compression)')
            [CompletionResult]::new('--default-subtitle', 'default-subtitle', [CompletionResultType]::ParameterName, 'Set which subtitle language should be set as default / auto shown when starting a video')
            [CompletionResult]::new('-t', 't', [CompletionResultType]::ParameterName, 'The number of threads used to download')
            [CompletionResult]::new('--threads', 'threads', [CompletionResultType]::ParameterName, 'The number of threads used to download')
            [CompletionResult]::new('--skip-existing', 'skip-existing', [CompletionResultType]::ParameterName, 'Skip files which are already existing')
            [CompletionResult]::new('--skip-specials', 'skip-specials', [CompletionResultType]::ParameterName, 'Skip special episodes')
            [CompletionResult]::new('-y', 'y', [CompletionResultType]::ParameterName, 'Skip any interactive input')
            [CompletionResult]::new('--yes', 'yes', [CompletionResultType]::ParameterName, 'Skip any interactive input')
            [CompletionResult]::new('-h', 'h', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            [CompletionResult]::new('--help', 'help', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            break
        }
        'crunchy-cli;download' {
            [CompletionResult]::new('-a', 'a', [CompletionResultType]::ParameterName, 'Audio language. Can only be used if the provided url(s) point to a series. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('--audio', 'audio', [CompletionResultType]::ParameterName, 'Audio language. Can only be used if the provided url(s) point to a series. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('-s', 's', [CompletionResultType]::ParameterName, 'Subtitle language. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('--subtitle', 'subtitle', [CompletionResultType]::ParameterName, 'Subtitle language. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('-o', 'o', [CompletionResultType]::ParameterName, 'Name of the output file')
            [CompletionResult]::new('--output', 'output', [CompletionResultType]::ParameterName, 'Name of the output file')
            [CompletionResult]::new('--output-specials', 'output-specials', [CompletionResultType]::ParameterName, 'Name of the output file if the episode is a special')
            [CompletionResult]::new('-r', 'r', [CompletionResultType]::ParameterName, 'Video resolution')
            [CompletionResult]::new('--resolution', 'resolution', [CompletionResultType]::ParameterName, 'Video resolution')
            [CompletionResult]::new('--ffmpeg-preset', 'ffmpeg-preset', [CompletionResultType]::ParameterName, 'Presets for converting the video to a specific coding format. Available presets: 
  h264 (h264 encoded with default video quality/compression)
  h264-nvidia (h264 encoded with nvidia hardware acceleration)
  h264-apple (h264 encoded with apple hardware acceleration)
  h264-lossless (h264 encoded with lossless video quality/compression)
  h264-normal (h264 encoded with normal video quality/compression)
  h264-low (h264 encoded with low video quality/compression)
  h264-nvidia-lossless (h264 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h264-nvidia-normal (h264 encoded with nvidia hardware acceleration and normal video quality/compression)
  h264-nvidia-low (h264 encoded with nvidia hardware acceleration and low video quality/compression)
  h264-apple-lossless (h264 encoded with apple hardware acceleration and lossless video quality/compression)
  h264-apple-normal (h264 encoded with apple hardware acceleration and normal video quality/compression)
  h264-apple-low (h264 encoded with apple hardware acceleration and low video quality/compression)
  h265 (h265 encoded with default video quality/compression)
  h265-nvidia (h265 encoded with nvidia hardware acceleration)
  h265-apple (h265 encoded with apple hardware acceleration)
  h265-lossless (h265 encoded with lossless video quality/compression)
  h265-normal (h265 encoded with normal video quality/compression)
  h265-low (h265 encoded with low video quality/compression)
  h265-nvidia-lossless (h265 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h265-nvidia-normal (h265 encoded with nvidia hardware acceleration and normal video quality/compression)
  h265-nvidia-low (h265 encoded with nvidia hardware acceleration and low video quality/compression)
  h265-apple-lossless (h265 encoded with apple hardware acceleration and lossless video quality/compression)
  h265-apple-normal (h265 encoded with apple hardware acceleration and normal video quality/compression)
  h265-apple-low (h265 encoded with apple hardware acceleration and low video quality/compression)
  av1 (av1 encoded with default video quality/compression)
  av1-lossless (av1 encoded with lossless video quality/compression)
  av1-normal (av1 encoded with normal video quality/compression)
  av1-low (av1 encoded with low video quality/compression)')
            [CompletionResult]::new('-t', 't', [CompletionResultType]::ParameterName, 'The number of threads used to download')
            [CompletionResult]::new('--threads', 'threads', [CompletionResultType]::ParameterName, 'The number of threads used to download')
            [CompletionResult]::new('--skip-existing', 'skip-existing', [CompletionResultType]::ParameterName, 'Skip files which are already existing')
            [CompletionResult]::new('--skip-specials', 'skip-specials', [CompletionResultType]::ParameterName, 'Skip special episodes')
            [CompletionResult]::new('-y', 'y', [CompletionResultType]::ParameterName, 'Skip any interactive input')
            [CompletionResult]::new('--yes', 'yes', [CompletionResultType]::ParameterName, 'Skip any interactive input')
            [CompletionResult]::new('--force-hardsub', 'force-hardsub', [CompletionResultType]::ParameterName, 'Force subtitles to be always burnt-in')
            [CompletionResult]::new('-h', 'h', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            [CompletionResult]::new('--help', 'help', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            break
        }
        'crunchy-cli;login' {
            [CompletionResult]::new('--credentials', 'credentials', [CompletionResultType]::ParameterName, 'Login with credentials (username or email and password). Must be provided as user:password')
            [CompletionResult]::new('--etp-rt', 'etp-rt', [CompletionResultType]::ParameterName, 'Login with the etp-rt cookie')
            [CompletionResult]::new('--anonymous', 'anonymous', [CompletionResultType]::ParameterName, 'Login anonymously / without an account')
            [CompletionResult]::new('--remove', 'remove', [CompletionResultType]::ParameterName, 'Remove your stored credentials (instead of saving them)')
            [CompletionResult]::new('-h', 'h', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            [CompletionResult]::new('--help', 'help', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            break
        }
        'crunchy-cli;search' {
            [CompletionResult]::new('--audio', 'audio', [CompletionResultType]::ParameterName, 'Audio languages to include. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN')
            [CompletionResult]::new('--search-top-results-limit', 'search-top-results-limit', [CompletionResultType]::ParameterName, 'Limit of search top search results')
            [CompletionResult]::new('--search-series-limit', 'search-series-limit', [CompletionResultType]::ParameterName, 'Limit of search series results')
            [CompletionResult]::new('--search-movie-listing-limit', 'search-movie-listing-limit', [CompletionResultType]::ParameterName, 'Limit of search movie listing results')
            [CompletionResult]::new('--search-episode-limit', 'search-episode-limit', [CompletionResultType]::ParameterName, 'Limit of search episode results')
            [CompletionResult]::new('--search-music-limit', 'search-music-limit', [CompletionResultType]::ParameterName, 'Limit of search music results')
            [CompletionResult]::new('-o', 'o', [CompletionResultType]::ParameterName, 'Format of the output text.')
            [CompletionResult]::new('--output', 'output', [CompletionResultType]::ParameterName, 'Format of the output text.')
            [CompletionResult]::new('-h', 'h', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            [CompletionResult]::new('--help', 'help', [CompletionResultType]::ParameterName, 'Print help (see more with ''--help'')')
            break
        }
        'crunchy-cli;help' {
            [CompletionResult]::new('archive', 'archive', [CompletionResultType]::ParameterValue, 'Archive a video')
            [CompletionResult]::new('download', 'download', [CompletionResultType]::ParameterValue, 'Download a video')
            [CompletionResult]::new('login', 'login', [CompletionResultType]::ParameterValue, 'Save your login credentials persistent on disk')
            [CompletionResult]::new('search', 'search', [CompletionResultType]::ParameterValue, 'Search in videos')
            [CompletionResult]::new('help', 'help', [CompletionResultType]::ParameterValue, 'Print this message or the help of the given subcommand(s)')
            break
        }
        'crunchy-cli;help;archive' {
            break
        }
        'crunchy-cli;help;download' {
            break
        }
        'crunchy-cli;help;login' {
            break
        }
        'crunchy-cli;help;search' {
            break
        }
        'crunchy-cli;help;help' {
            break
        }
    })

    $completions.Where{ $_.CompletionText -like "$wordToComplete*" } |
        Sort-Object -Property ListItemText
}
